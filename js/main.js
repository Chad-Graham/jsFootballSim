const gamebox = document.getElementById('gamebox');
/* game variables */

let clock = 900;
let quarter = ["", "first quarter", "second quarter", "third quarter", "fourth quarter", "overtime"];
let quarterIndex = 1;

let down = ["Kickoff", "First down", "Second Down", "Third Down", "Fourth Down"]
let downIndex = 0;

let toGo = 10;
let yardLine = 40;

let possession = "player";

let lowNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let runNumbers = [16, 17, 18, 19, 20, 21, 22, 23]

let dbNumbers = [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]

let wideNumbers = [80, 81, 82, 83, 84, 85, 86, 87, 88, 89]

let teams = ["Eagles",
    "Tigers",
    "Broncos",
    "Bulldogs",
    "Yellowjackets",
    "Wildcats",
    "Golden Eagles",
    "Indians",
    "Generals",
    "Lions",
    "Owls",
    "Cougars",
    "Knights",
    "Cavaliers",
    "Cardinals",
    "Mustangs",
    "Yellow Jackets",
    "Bombers",
    "Pirates",
    "Grizzlies",
    "Vikings",
    "Miners",
    "Rams",
    "Coyotes",
    "Flyers",
    "Bears",
    "Hurricanes",
    "Hawks",
    "Gators",
    "Hornets",
    "Greyhounds",
    "Patriots",
    "Reds",
    "Crusaders",
    "Beavers",
    "Rebels",
    "Oilers",
    "Bobcats",
    "Red Raiders",
    "Saints",
    "Sharks",
    "Titans",
    "Longhorns",
    "Braves",
    "Jets",
    "Wolves",
    "Monarchs",
    "Blue Devils",
    "Outlaws",
    "Wolverines",
    "Aces",
    "Rockets",
    "Mavericks",
    "Dragons",
    "Mountaineers",
    "Jaguars",
    "Thunderbirds",
    "Chargers",
    "Highlanders",
    "Pioneers",
    "Bluejays",
    "Huskies",
    "Blues",
    "Red Devils",
    "Clippers",
    "Stars",
    "Blackhawks",
    "Comets",
    "Buffaloes",
    "Kings",
    "Lancers",
    "Ravens",
    "Rangers",
    "Wolfpack",
    "Bearcats"];

let schools = ["Academy",
    "Prepatory",
    "Reformatory",
    "High",
    "Vocational"];

let areas = ["Midtown",
    "Valley",
    "East",
    "North",
    "South",
    "West",
    "Upper Lake",
    "Riverside",
    "George Washington",
    "Lincoln",
    "Wallace",
    "Mountain"];

let firstNames = ["Liam",
    "Noah",
    "Oliver",
    "Elijah",
    "James",
    "William",
    "Benjamin",
    "Lucas",
    "Henry",
    "Theodore",
    "Jack",
    "Levi",
    "Alexander",
    "Jackson",
    "Mateo",
    "Daniel",
    "Michael",
    "Mason",
    "Sebastian",
    "Ethan",
    "Logan",
    "Owen",
    "Samuel",
    "Jacob",
    "Asher",
    "Aiden",
    "John",
    "Joseph",
    "Wyatt",
    "David",
    "Leo",
    "Luke",
    "Julian",
    "Hudson",
    "Grayson",
    "Matthew",
    "Ezra",
    "Gabriel",
    "Carter",
    "Isaac",
    "Jayden",
    "Luca",
    "Anthony",
    "Dylan",
    "Lincoln",
    "Thomas",
    "Maverick",
    "Elias",
    "Josiah",
    "Charles",
    "Caleb",
    "Christopher",
    "Ezekiel",
    "Miles",
    "Jaxon",
    "Isaiah",
    "Andrew",
    "Joshua",
    "Nathan",
    "Nolan",
    "Adrian",
    "Cameron",
    "Santiago",
    "Eli",
    "Aaron",
    "Ryan",
    "Angel",
    "Cooper",
    "Waylon",
    "Easton",
    "Kai",
    "Christian",
    "Landon",
    "Colton",
    "Roman",
    "Axel",
    "Brooks",
    "Jonathan",
    "Robert",
    "Jameson",
    "Ian",
    "Everett",
    "Greyson",
    "Wesley",
    "Jeremiah",
    "Hunter",
    "Leonardo",
    "Jordan",
    "Jose",
    "Bennett",
    "Silas",
    "Nicholas",
    "Parker",
    "Beau",
    "Weston",
    "Austin",
    "Connor",
    "Carson",
    "Dominic",
    "Xavier",
    "Jaxson",
    "Jace",
    "Emmett",
    "Adam",
    "Declan",
    "Rowan",
    "Micah",
    "Kayden",
    "Gael",
    "River",
    "Ryder",
    "Kingston",
    "Damian",
    "Sawyer",
    "Luka",
    "Evan",
    "Vincent",
    "Legend",
    "Myles",
    "Harrison",
    "August",
    "Bryson",
    "Amir",
    "Giovanni",
    "Chase",
    "Diego",
    "Milo",
    "Jasper",
    "Walker",
    "Jason",
    "Brayden",
    "Cole",
    "Nathaniel",
    "George",
    "Lorenzo",
    "Zion",
    "Luis",
    "Archer",
    "Enzo",
    "Jonah",
    "Thiago",
    "Theo",
    "Ayden",
    "Zachary",
    "Calvin",
    "Braxton",
    "Ashton",
    "Rhett",
    "Atlas",
    "Jude",
    "Bentley",
    "Carlos",
    "Ryker",
    "Adriel",
    "Arthur",
    "Ace",
    "Tyler",
    "Jayce",
    "Max",
    "Elliot",
    "Graham",
    "Kaiden",
    "Maxwell",
    "Juan",
    "Dean",
    "Matteo",
    "Malachi",
    "Ivan",
    "Elliott",
    "Jesus",
    "Emiliano",
    "Messiah",
    "Gavin",
    "Maddox",
    "Camden",
    "Hayden",
    "Leon",
    "Antonio",
    "Justin",
    "Tucker",
    "Brandon",
    "Kevin",
    "Judah",
    "Finn",
    "King",
    "Brody",
    "Xander",
    "Nicolas",
    "Charlie",
    "Arlo",
    "Emmanuel",
    "Barrett",
    "Felix",
    "Alex",
    "Miguel",
    "Abel",
    "Alan",
    "Beckett",
    "Amari",
    "Karter",
    "Timothy",
    "Abraham",
    "Jesse",
    "Zayden",
    "Blake",
    "Alejandro",
    "Dawson",
    "Tristan",
    "Victor",
    "Avery",
    "Joel",
    "Grant",
    "Eric",
    "Patrick",
    "Peter",
    "Richard",
    "Edward",
    "Andres",
    "Emilio",
    "Colt",
    "Knox",
    "Beckham",
    "Adonis",
    "Kyrie",
    "Matias",
    "Oscar",
    "Lukas",
    "Marcus",
    "Hayes",
    "Caden",
    "Remington",
    "Griffin",
    "Nash",
    "Israel",
    "Steven",
    "Holden",
    "Rafael",
    "Zane",
    "Jeremy",
    "Kash",
    "Preston",
    "Kyler",
    "Jax",
    "Jett",
    "Kaleb",
    "Riley",
    "Simon",
    "Phoenix",
    "Javier",
    "Bryce",
    "Louis",
    "Mark",
    "Cash",
    "Lennox",
    "Paxton",
    "Malakai",
    "Paul",
    "Kenneth",
    "Nico",
    "Kaden",
    "Lane",
    "Kairo",
    "Maximus",
    "Omar",
    "Finley",
    "Atticus",
    "Crew",
    "Brantley",
    "Colin",
    "Dallas",
    "Walter",
    "Brady",
    "Callum",
    "Ronan",
    "Hendrix",
    "Jorge",
    "Tobias"];

let lastNames = ["Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "Wright",
    "Torres",
    "Nguyen",
    "Hill",
    "Flores",
    "Green",
    "Adams",
    "Nelson",
    "Baker",
    "Hall",
    "Rivera",
    "Campbell",
    "Mitchell",
    "Carter",
    "Roberts"];

let oplays = ["Middle",
    "Iso",
    "Off Tackle",
    "Toss",
    "Sweep",
    "Trap",
    "Counter",
    "Draw",
    "Bootleg",
    "QB Sneak",
    "End-around",
    "Reverse",
    "Option"];

let oPass = ["Long Pass",
    "Hail Mary",
    "Deep Post",
    "Stop and Go",
    "In Pattern",
    "Out Pattern",
    "Fade",
    "Short Pass",
    "Screen Pass",
    "Button Hook",
    "Slant Route",
    "Play Action",
    "Lateral Pass",
    "Slant"];

let oForms = ["I Form",
    "Offset",
    "Single Back",
    "Pro Set",
    "Wildcat",
    "Shotgun",
    "Pistol"];

let dpForms = ["The 3-4",
    "The 4-3",
    "Nickle",
    "Dime",
    "Prevent"];

let drForms = ["The 3-4",
    "The 4-3",
    "Run Blitz",
    "Heavy"];

let dPass = ["Man Cover",
    "Zone Cover",
    "Pass Blitz",
    "Cover Two",
    "Prevent",
    "Press Cover",
    "Double Team",
    "QB Spy"];

/* team builder */

class Team {
    constructor() {
        this.name = teams.splice(Math.floor(Math.random() * teams.length), 1);
        this.school = schools.splice(Math.floor(Math.random() * schools.length), 1);
        this.area = areas.splice(Math.floor(Math.random() * areas.length), 1);
        this.score = 0;
        this.oline = (Math.floor(Math.random() * 80));
        this.dline = (Math.floor(Math.random() * 80));
        this.qbFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.qbLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.qbRank = (Math.floor(Math.random() * 80));
        this.qbNumber = lowNumbers.splice(Math.floor(Math.random() * lowNumbers.length), 1);

        this.kickerFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.kickerLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.kickerRank = (Math.floor(Math.random() * 80));
        this.kickerNumber = lowNumbers.splice(Math.floor(Math.random() * lowNumbers.length), 1);

        this.punterFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.punterLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.punterRank = (Math.floor(Math.random() * 80));
        this.punterNumber = lowNumbers.splice(Math.floor(Math.random() * lowNumbers.length), 1);

        this.returnFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.returnLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.returnRank = (Math.floor(Math.random() * 80));
        this.returnNumber = lowNumbers.splice(Math.floor(Math.random() * lowNumbers.length), 1);

        this.wrOneFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.wrOneLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.wrOneRank = (Math.floor(Math.random() * 80));
        this.wrOneNumber = wideNumbers.splice(Math.floor(Math.random() * wideNumbers.length), 1);

        this.wrTwoFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.wrTwoLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.wrTwoRank = (Math.floor(Math.random() * 80));
        this.wrTwoNumber = wideNumbers.splice(Math.floor(Math.random() * wideNumbers.length), 1);

        this.wrThreeFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.wrThreeLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.wrThreeRank = (Math.floor(Math.random() * 80));
        this.wrThreeNumber = wideNumbers.splice(Math.floor(Math.random() * wideNumbers.length), 1);

        this.teFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.teLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.teRank = (Math.floor(Math.random() * 80));
        this.teNumber = wideNumbers.splice(Math.floor(Math.random() * wideNumbers.length), 1);

        this.rbFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.rbLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.rbRank = (Math.floor(Math.random() * 80));
        this.rbNumber = runNumbers.splice(Math.floor(Math.random() * runNumbers.length), 1);

        this.fbFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.fbLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.fbRank = (Math.floor(Math.random() * 80));
        this.fbNumber = runNumbers.splice(Math.floor(Math.random() * runNumbers.length), 1);

        this.outsideLFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.outsideLLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.outsideLRank = (Math.floor(Math.random() * 80));
        this.outsideLNumber = dbNumbers.splice(Math.floor(Math.random() * dbNumbers.length), 1);

        this.insideLFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.insideLLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.insideLRank = (Math.floor(Math.random() * 80));
        this.insideLNumber = dbNumbers.splice(Math.floor(Math.random() * dbNumbers.length), 1);

        this.cornerOneFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.cornerOneLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.cornerOneRank = (Math.floor(Math.random() * 80));
        this.cornerOneNumber = dbNumbers.splice(Math.floor(Math.random() * dbNumbers.length), 1);

        this.cornerTwoFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.cornerTwoLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.cornerTwoRank = (Math.floor(Math.random() * 80));
        this.cornerTwoNumber = dbNumbers.splice(Math.floor(Math.random() * dbNumbers.length), 1);

        this.strongSafetyFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.strongSafetyLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.strongSafetyRank = (Math.floor(Math.random() * 80));
        this.strongSafetyNumber = dbNumbers.splice(Math.floor(Math.random() * dbNumbers.length), 1);

        this.freeSafetyFirstName = firstNames.splice(Math.floor(Math.random() * firstNames.length), 1);
        this.freeSafetyLastName = lastNames.splice(Math.floor(Math.random() * lastNames.length), 1);
        this.freeSafetyRank = (Math.floor(Math.random() * 80));
        this.freeSafetyNumber = dbNumbers.splice(Math.floor(Math.random() * dbNumbers.length), 1);

        this.totalRank = ((this.qbRank + this.rbRank + this.oline + this.dline + this.wrOneRank + this.wrTwoRank + this.wrThreeRank + this.teRank + this.kickerRank + this.punterRank + this.outsideLRank + this.insideLRank + this.cornerOneRank + this.cornerTwoRank + this.strongSafetyRank + this.freeSafetyRank) / 16);

    }
}

const player = new Team;
const computer = new Team;

/* print out one letter at a time*/

function typewriter(text) {

    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            if (text[i] === "|") {
                document.getElementById('gamebox').innerHTML += `<br><br`;
            } else {
                document.getElementById('gamebox').innerHTML += text[i];
            }
            /* = text.slice(0, i); */
        }, i * 15);
    }
}

/* gameclock  */
function gameClock(value) {
    return (Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : '00'))
}

/*scoreboard */
function updateScore() {
    /* set possession dot */
    let p1 = "";
    let p2 = "";
    let p3 = "";
    if (possession === "player") {
        p1 = "&#x2022;"
    } else {
        p2 = "&#x2022;";
    }
    /* set toGo or Kickoff */
    if (down[downIndex] === "Kickoff") {
        p3 = "Kickoff";
    } else {
        p3 = `${down[downIndex]} and ${toGo}`
    }
    let thisTime = gameClock(clock);
    let thisText = `${p1} ${player.name}: ${player.score}. ${p2} ${computer.name}: ${computer.score}. ${p3}. ${quarter[quarterIndex].charAt(0).toUpperCase() + quarter[quarterIndex].slice(1)}: <span>${thisTime}  </span>`
    document.getElementById('title').innerHTML = thisText;
}

/* Introduction to game */
let text = `Welcome to High School Football Live, coming to you from ${player.area} ${player.school}. Tonight the ${player.name} defend their home field from their division rivals, the ${computer.area} ${computer.school} ${computer.name}.<br><br>As head coach of the ${player.name}, it is up to you to make the correct calls to defeat the ${computer.name}.<br><br>So darn exciting, really. Choose the length of the game that you would like to play below...`;

document.getElementById('gamebox').innerHTML = text;

updateScore();
firstChoice();

function startGame(choice) {
    if (choice === "whole") {
        /* kickoff with full time/quarter */
        kickOff();
    } else if (choice === "half") {
        /* play second half */
        quarterIndex = 3;
        downIndex = 0;
        computer.score = ((Math.floor(Math.random() * 4) * 3) + (Math.floor(Math.random() * 3) * 7));
        player.score = ((Math.floor(Math.random() * 4) * 3) + (Math.floor(Math.random() * 3) * 7));
        clock = 900;
        possession = "computer";
        kickDefend();
    } else {
        /*play last two mintues */
        quarterIndex = 4;
        downIndex = 1;
        computer.score = ((Math.floor(Math.random() * 4) * 3) + (Math.floor(Math.random() * 3) * 7));
        if (computer.score > 6) {
            player.score = computer.score - 7;
        } else {
            player.score = 0;
        }
        clock = 120;
        playOffense();
    }

}

function firstChoice() {
    let buttons = `<button type="button" onclick="startGame('whole')" class="btn btn-primary">Entire Game</button>
                    <button type="button" onclick="startGame('half')" class="btn btn-primary">Halftime</button>
                    <button type="button" onclick="startGame('two')" class="btn btn-primary">Two minutes</button>`

    document.getElementById('choices').innerHTML = buttons;
}

function playOffense() {
    updateScore();
    document.getElementById('choices').innerHTML = "";

    let text = `Playing offensive downs`;
    document.getElementById('gamebox').innerHTML = text;
}

function playDefense() {
    updateScore();
    document.getElementById('choices').innerHTML = "";

    let text = `Playing defensive downs`;
    document.getElementById('gamebox').innerHTML = text;
}

function kickOff() {
    updateScore();
    document.getElementById('choices').innerHTML = "";

    let text = `The ${player.name} line up at the 40-yard line for the kickoff. ${player.area} ${player.school} kicker, ${player.kickerFirstName} ${player.kickerLastName}, wearing number ${player.kickerNumber}, is ready to send it away.<br><br>Number ${computer.returnNumber} for the ${computer.name}, ${computer.returnFirstName} ${computer.returnLastName},  is ready for the return. `;

    document.getElementById('gamebox').innerHTML = text;

    if (quarterIndex === 1 && clock === 900) {
        if (player.totalRank > computer.totalRank) {
            document.getElementById('gamebox').innerHTML += `The ${player.name} are favored in tonight's matchup.`
        } else {
            document.getElementById('gamebox').innerHTML += `The ${computer.name} are favored in tonight's matchup.`
        }
    } else {
        if (player.score === computer.score) {
            document.getElementById('gamebox').innerHTML += `The score is tied at ${player.score} `;
        } else if (player.score < computer.score) {
            document.getElementById('gamebox').innerHTML += `The ${player.area} ${player.school} ${player.name} face a ${computer.score - player.score} point deficit `;
        } else {
            document.getElementById('gamebox').innerHTML += `The ${player.area} ${player.school} ${player.name} hold on to a ${player.score - computer.score} point lead `
        };

        if (clock === 900) {
            document.getElementById('gamebox').innerHTML += `at the start of the ${quarter[quarterIndex]}.`;
        } else {
            let thisTime = gameClock(clock);
            document.getElementById('gamebox').innerHTML += `with ${thisTime} left in the ${quarter[quarterIndex]}.`;
        };
    }

    let buttons = `<button type="button" onclick="executeKick()" class="btn btn-primary">Kickoff</button>
    <button type="button" onclick="onsideKick()" class="btn btn-primary">Onsides</button>`

    document.getElementById('choices').innerHTML = buttons;
}

function kickDefend() {
    updateScore();
    document.getElementById('choices').innerHTML = "";

    let text = `The ${computer.name} line up at the 40-yard line for the kickoff. ${computer.area} ${computer.school} kicker, ${computer.kickerFirstName} ${computer.kickerLastName}, wearing number ${computer.kickerNumber}, is ready to send it away.<br><br>Number ${player.returnNumber} for the ${player.name}, ${player.returnFirstName} ${player.returnLastName},  is ready for the return. `;


    document.getElementById('gamebox').innerHTML = text;

    if (player.score === computer.score) {
        document.getElementById('gamebox').innerHTML += `The score is tied at ${player.score} `;
    } else if (player.score < computer.score) {
        document.getElementById('gamebox').innerHTML += `The ${player.area} ${player.school} ${player.name} face a ${computer.score - player.score} point deficit `;
    } else {
        document.getElementById('gamebox').innerHTML += `The ${player.area} ${player.school} ${player.name} hold on to a ${player.score - computer.score} point lead `
    };

    if (clock === 900) {
        document.getElementById('gamebox').innerHTML += `at the start of the ${quarter[quarterIndex]}.`;
    } else {
        let thisTime = gameClock(clock);
        document.getElementById('gamebox').innerHTML += `with ${thisTime} left in the ${quarter[quarterIndex]}.`;
    };

}
