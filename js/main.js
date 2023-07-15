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

let first_names = ["Liam",
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

let last_names = ["Smith",
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

let opass = ["Long Pass",
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

let oforms = ["I Form",
    "Offset",
    "Single Back",
    "Pro Set",
    "Wildcat",
    "Shotgun",
    "Pistol"];

let dpforms = ["The 3-4",
    "The 4-3",
    "Nickle",
    "Dime",
    "Prevent"];

let drforms = ["The 3-4",
    "The 4-3",
    "Run Blitz",
    "Heavy"];

let dpass = ["Man Cover",
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
        alert('whole');
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

    let text = `Kickoff`;
    document.getElementById('gamebox').innerHTML = text;
}

function kickDefend() {
    updateScore();
    document.getElementById('choices').innerHTML = "";

    let text = `Kick defense`;
    document.getElementById('gamebox').innerHTML = text;
}
