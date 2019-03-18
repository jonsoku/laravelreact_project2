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

### change name Example.js -> App.js
    1. Example.js -> App.js 이름변경
    App.js

    import React, { Component } from 'react';

    class App extends Component {
        render() {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Example Component</div>

                                <div className="card-body">
                                    I'm an example component!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default App;

    2. js폴더 하위에 index.js 생성
    import React, { Component } from 'react';
    import ReactDOM from 'react-dom';
    import App from './components/App';

    if (document.getElementById('root')) {
        ReactDOM.render(<App />, document.getElementById('root'));
    }
    
    3. js/app.js require 변경
    require('./index');

### App.js 수정
    div사이에 form 추가 

    <form>
        <div className="form-group">
            <textarea className="form-control" rows="5" placeholder="create a new task" required/>
        </div>
        <button type="submit" class="btn btn-primary">create</button>
    </form>

### 1. constructor(){} 생성
