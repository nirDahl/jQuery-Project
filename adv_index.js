// 1. Ask user to select a door (Red/Black)
// 2. If user selects Red door, give users 2 more options (Go upstairs and Go downstairs)
// 3. Red Door --> If the user selects Go Upstairs --> You get to Haloween Candy store and win
// 4. Red Door --> If the user selects Go Downstairs --> You fall, break your leg and lose
// 5. If user selects Black door, give users 2 more options (Go home and Go downstairs)
// 6. Black Door --> If the user selects Go Downstairs --> You fall, break your leg and lose
// 7. Black Door --> If you choose Go home --> You chicked out!
// 8. Handle cases where the user does not enter the correct options you ask in prompt with go home

$(function() {
    function selectDoor() {
        $('#btn').on('click', function() {
            $(this).prop('disabled', true)
            const doorChoice = (prompt("Do you wnat to enter the RED door or the BLACK door")).toLowerCase();
            userDoorChoice(doorChoice)
        })
    }

    function redDoor() {
        $('#btnRed').on('click', function() {
            $(this).prop('disabled', true)
            const upDwnOptions = (prompt("Tell me!!! Do you want to go UPSTAIRS or DOWNSTAIRS?")).toLowerCase();
            userStairOptions(upDwnOptions);
        })
    }

    function blackDoor() {
        $('#btnBlack').on('click', function() {
            $(this).prop('disabled', true)
            const homeDwnOptions = (prompt("What next!! Do you want to go HOME or go DOWNSTAIRS")).toLowerCase();
            userStairOptions(homeDwnOptions);
        })
    }

    function goHome() {
        $(".goHomeYes").removeClass("hidden");
    }

    function goUpstairs() {
        $('.upstairs').removeClass("hidden");
    }

    function goDownstairs() {
        $('.downtairs').removeClass("hidden");
    }

    function userDoorChoice(door) {
        if (door === "red") {
            $(".redDoorYes").removeClass("hidden");
            stairRedOptions = redDoor();
        } else if (door === "black") {
            $(".blackDoorYes").removeClass("hidden");
            stairBlackOptions = blackDoor();
        } else {
            goHome();
        }
    }

    function userStairOptions(stair) {
        if (stair === "downstairs") {
            goDownstairs();
        } else if (stair === "upstairs") {
            goUpstairs();
        } else {
            goHome();
        }
    }

    selectDoor();
})