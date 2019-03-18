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

### App.js 수정 2

    [1]~[7]
    import React, { Component } from 'react';

    class App extends Component {
        // [1] constructor
        constructor(props){
            super(props);
            this.state={
                name: '',
                tasks: []
            }
            //[6] bind
            this.handleChange = this.handleChange.bind(this);
        }
        // [2] handle change
        handleChange(e){
            this.setState({
                //[5] log 로 확인한 것을 state에 넣는다.
                name: e.target.value
            })
            //[3] console.log(e.target.value);
        }



        render() {
            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-header">Example Component</div>

                                <div className="card-body">
                                    <form>
                                        <div className="form-group">
                                            <textarea
                                            //[4] console.log에 찍히는 것을 확인하기위해서 가즈아!
                                            onChange={this.handleChange}
                                            //[7] 받은 것을 value에 넣는다.
                                            value={this.state.name}
                                            className="form-control"
                                            rows="5"
                                            placeholder="create a new task"
                                            required/>
                                        </div>
                                        <button type="submit" className="btn btn-primary">create</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    export default App;

### model 생성
    php artisan make:model Task -m
### migration
    Schema::create('tasks', function (Blueprint $table) {
        $table->increments('id');
        $table->integer('user_id')->unsigned()->index();
        $table->string('name');
        $table->timestamps();
        $table->foreign('user_id')
        ->references('id')->on('users')->onDelete('cascade');
    });
### Model : Task.php, User.php 관계 맺기
### Tasks.php
    class Task extends Model
    {
        protected $fillable = ['name'];

        public function user(){
            return $this->belongsto(\App\User::class);
        }
    }

### User.php
    public function tasks(){
        return $this->hasMany(\App\Task::class);
    }
### php artisan migrate -> database 확인
    Dummy값 넣기
### controller resource 로 생성하기
    php artisan make:controller TaskController --resource
### web.php
    Route::resource('tasks', 'TaskController');
    php artisan route:list
### TasksController.php #1 auth미들웨어 걸기
    public function __construct(){
        $this->middleware('auth');
    }
### TasksController.php #2 
    use \App\Task; 작성
### TasksController.php #3 
    [1]~[6]
### App.js
    [8] handlesubmit 생성
