<?php

namespace Kiwilan\Typescriptable\Typed\Route;

use Closure;
use Illuminate\Support\Collection;
use Kiwilan\Typescriptable\TypescriptableConfig;

class TypeRouteTs
{
    /** @var Collection<string, TypeRoute> */
    protected Collection $routes;

    // ROUTE NAMES

    protected ?string $tsNamePaths = null;

    protected ?string $tsNames = null;

    protected ?string $tsPaths = null;

    protected ?string $tsParams = null;

    // GLOBAL TYPES

    protected ?string $tsTypes = null;

    protected ?string $tsGlobalTypes = null;

    // TYPES

    protected ?string $tsGlobalTypesGet = null;

    protected ?string $tsGlobalTypesPost = null;

    protected ?string $tsGlobalTypesPut = null;

    protected ?string $tsGlobalTypesPatch = null;

    protected ?string $tsGlobalTypesDelete = null;

    /**
     * @param  Collection<string, TypeRoute>  $routes
     */
    public static function make(Collection $routes): self
    {
        $self = new self();
        $self->routes = $routes;
        $self->parse();

        return $self;
    }

    public function get(): string
    {
        $this->tsNamePaths = empty($this->tsNames) ? 'never' : $this->tsNamePaths;
        $this->tsNames = empty($this->tsNames) ? 'never' : $this->tsNames;
        $this->tsPaths = empty($this->tsPaths) ? 'never' : $this->tsPaths;

        $this->tsGlobalTypes = empty($this->tsGlobalTypes) ? 'never' : $this->tsGlobalTypes;
        $this->tsGlobalTypesGet = empty($this->tsGlobalTypesGet) ? 'never' : $this->tsGlobalTypesGet;
        $this->tsGlobalTypesPost = empty($this->tsGlobalTypesPost) ? 'never' : $this->tsGlobalTypesPost;
        $this->tsGlobalTypesPut = empty($this->tsGlobalTypesPut) ? 'never' : $this->tsGlobalTypesPut;
        $this->tsGlobalTypesPatch = empty($this->tsGlobalTypesPatch) ? 'never' : $this->tsGlobalTypesPatch;
        $this->tsGlobalTypesDelete = empty($this->tsGlobalTypesDelete) ? 'never' : $this->tsGlobalTypesDelete;

        return <<<typescript
        // This file is auto generated by TypescriptableLaravel.
        declare namespace App {
          declare namespace Route {
            {$this->tsNamePaths}
            export type Name = {$this->tsNames}
            export type Path = {$this->tsPaths};
            export type Params = {
        {$this->tsParams}
            };

            export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
            export interface Entity { name: App.Route.Name; path: App.Route.Path; params?: App.Route.Params[Route.Name],  method: App.Route.Method; }

            declare namespace Typed {
        {$this->tsTypes}
            }
            export type Param = string | number | boolean | undefined
            export type Type = {$this->tsGlobalTypes}
            export type TypeGet = {$this->tsGlobalTypesGet}
            export type TypePost = {$this->tsGlobalTypesPost}
            export type TypePut = {$this->tsGlobalTypesPut}
            export type TypePatch = {$this->tsGlobalTypesPatch}
            export type TypeDelete = {$this->tsGlobalTypesDelete}
          }
        }
        typescript;
    }

    private function parse()
    {
        $this->tsNamePaths = $this->setTsNamePaths();
        $this->tsNames = $this->setTsNames();
        $this->tsPaths = $this->setTsPaths();
        $this->tsParams = $this->setTsParams();

        $this->tsTypes = $this->setTsTypes();
        $this->tsGlobalTypes = $this->setTsGlobalTypes();

        $this->tsGlobalTypesGet = $this->setTsGlobalTypesMethod('GET');
        $this->tsGlobalTypesPost = $this->setTsGlobalTypesMethod('POST');
        $this->tsGlobalTypesPut = $this->setTsGlobalTypesMethod('PUT');
        $this->tsGlobalTypesPatch = $this->setTsGlobalTypesMethod('PATCH');
        $this->tsGlobalTypesDelete = $this->setTsGlobalTypesMethod('DELETE');
    }

    private function setTsNamePaths(): string
    {
        return $this->collectRoutes(function (TypeRoute $route) {
            $name = TypescriptableConfig::routesUsePath()
                ? $route->fullUri()
                : $route->name();

            return "'{$name}'";
        }, ' | ');
    }

    private function setTsNames(): string
    {
        return $this->collectRoutes(function (TypeRoute $route) {
            return "'{$route->name()}'";
        }, ' | ');
    }

    private function setTsPaths(): string
    {
        return $this->collectRoutes(function (TypeRoute $route) {
            return "'{$route->fullUri()}'";
        }, ' | ');
    }

    private function setTsParams(): string
    {
        return $this->collectRoutes(function (TypeRoute $route) {
            $hasParams = count($route->parameters()) > 0;

            if ($hasParams) {
                $params = collect($route->parameters())
                    ->map(fn (TypeRouteParam $param) => "'{$param->name()}'?: App.Route.Param")
                    ->join(",\n");

                return "      '{$route->name()}': {\n        {$params}\n      }";
            } else {
                return "      '{$route->name()}': never";
            }
        }, ",\n");
    }

    private function setTsTypes(): string
    {
        return $this->collectRoutes(function (TypeRoute $route) {
            $params = '';

            if (empty($route->parameters())) {
                $params = 'params?: undefined';
            } else {
                $params = collect($route->parameters())
                    ->map(function (TypeRouteParam $param) {
                        $required = $param->required() ? '' : '?';

                        return "{$param->name()}{$required}: App.Route.Param,";
                    })
                    ->join(' ');
                $params = <<<typescript
                params: {
                          {$params}
                        }
                typescript;
            }

            return <<<typescript
                  type {$route->routeName()} = {
                    name: '{$route->pathType()}',
                    {$params},
                    query?: Record<string, App.Route.Param>,
                    hash?: string,
                  }
            typescript;
        }, ";\n");
    }

    private function setTsGlobalTypes(): string
    {
        return $this->collectRoutes(function (TypeRoute $route) {
            return <<<typescript
            App.Route.Typed.{$route->routeName()}
            typescript;
        }, ' | ');
    }

    private function setTsGlobalTypesMethod(string $method): string
    {
        $routes = $this->collectRoutesMethod($method);

        return collect($routes)
            ->map(function (TypeRoute $route) {
                return <<<typescript
                App.Route.Typed.{$route->routeName()}
                typescript;
            })->join(' | ');
    }

    private function collectRoutesMethod(string $method): Collection
    {
        return $this->routes->filter(fn (TypeRoute $route) => $route->method() === $method);
    }

    private function collectRoutes(Closure $closure, ?string $join = null): string|Collection
    {
        $routes = $this->routes->map(fn (TypeRoute $route, string $key) => $closure($route, $key));

        if ($join) {
            return $routes->join($join);
        }

        return $routes;
    }
}
