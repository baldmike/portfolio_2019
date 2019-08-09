<html lang="{{ app()->getLocale() }}"> 
    <head>
        <meta charset="utf-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <meta name="csrf-token" content="{{ csrf_token()}}"> 
        <script>window.laravel = { csrfToken: '{{ csrf_token() }}' }</script> 
        
        <title>BALD MIKE</title>

        <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      
        <link href="https://fonts.googleapis.com/css?family=Raleway:500&display=swap" rel="stylesheet">
         
    </head>
    
    <body>
        <div class="container-fluid" id="app">
            <!-- <router-view></router-view> -->
            <portfolio/>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>        
    </body>
</html>
