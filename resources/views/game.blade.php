@extends('layout')

@section('content')

<div class="game-container">

    <h1 class="game-title">Food Catcher</h1>

    <div class="top-bar">

        <div class="score-box">
            Score: <span id="score">0</span>
        </div>

        <div class="speed-box">
            Speed: <span id="speedLevel">1</span>
        </div>

    </div>

    <div class="game-controls">

        <button id="startButton" class="game-button">
            Start Game
        </button>

    </div>

    <canvas id="gameCanvas" width="900" height="600"></canvas>

    <div class="game-info">

        <p>
            Use ← and → arrow keys to move the basket
        </p>

        <p>
            Catch healthy food and avoid junk food or objects
        </p>

    </div>

    <div id="gameOverBox" class="game-over-box hidden">

        <h2>Game Over</h2>

        <p>
            Your Score:
            <span id="finalScore">0</span>
        </p>

        <button id="restartButton" class="game-button">
            Restart Game
        </button>

    </div>

</div>

<script src="{{ asset('js/config.js') }}"></script>
<script src="{{ asset('js/basket.js') }}"></script>
<script src="{{ asset('js/collision.js') }}"></script>
<script src="{{ asset('js/score.js') }}"></script>
<script src="{{ asset('js/storage.js') }}"></script>
<script src="{{ asset('js/items.js') }}"></script>
<script src="{{ asset('js/game.js') }}"></script>

@endsection