### start project
    composer create-project --prefer-dist laravel/laravel project2 "5.7.*"
### Edit .env
    DB_CONNECTION=mysql
    DB_HOST=laravel.cim78dtgz3dv.ap-northeast-1.rds.amazonaws.com
    DB_PORT=3306
    DB_DATABASE=
    DB_USERNAME=
    DB_PASSWORD=
### Edit AppServiceProvider.php
    App\Provider\AppServiceProvider.php에 아래 라인 추가.

    use Illuminate\Support\Facades\Schema;

    public function boot()
    {
        Schema::defaultStringLength(191);
    }
### change preset react 1
    php artisan preset react
### change preset react 2
    npm install && npm run dev
### change preset react 3
    npm run watch

### make auth
    php artisan make:auth
    php artisan migrate

### home.blade.php
    @extends('layouts.app')

    @section('content')
        <div id="example"></div>
    @endsection
