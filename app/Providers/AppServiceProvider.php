<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //web routes
        $this->loadRoutesFrom(base_path('routes/web.php'));

    // Load API routes
    Route::prefix('api')->group(function () {
        $this->loadRoutesFrom(base_path('routes/api.php'));
    });
    }
}
