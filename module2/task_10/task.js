'use strict';

function askCandidates(countOfCandidates) {
    const candidateArray = [];

    for (let i = 0; i < countOfCandidates; i++) {
        const candidateName = prompt(`Give ${i + 1}. candidate name`);

        const candidate = {
            name: candidateName,
            votes: 0,
        };

        candidateArray.push(candidate);
    }

    return candidateArray;
}

function askVotes(candidateArray, countOfVoters) {
    for (let i = 0; i < countOfVoters; i++) {
        while (true) {
            const vote = prompt(`Voter ${i + 1}. enter your voute`);

            if (vote === '') {
                break;
            }

            const candidatIndex = candidateArray.findIndex(candidate => candidate.name === vote);

            if (candidatIndex === -1) {
                alert('Could not find given candidate. Try again');
            } else {
                candidateArray[candidatIndex].votes += 1;
                break;
            }
        }
    }
}

function announceWinner(candidateArray) {
    const sortedCandidateArray = candidateArray.sort((a, b) => b.votes - a.votes);

    console.log(`The winner is ${sortedCandidateArray[0].name} with ${sortedCandidateArray[0].votes} votes.`);
    console.log('results:');
    for (let i = 0; i < candidateArray.length; i++) {
        console.log(`${sortedCandidateArray[i].name}: ${sortedCandidateArray[i].votes} votes`);
    }
}

function main() {
    const strCountOfCandidates = prompt('Enter the count of candidates');
    const countOfCandidates = parseInt(strCountOfCandidates);

    if (isNaN(countOfCandidates)) {
        alert('Give the count of candidates as number');
    } else {
        const candidateArray = askCandidates(countOfCandidates);

        const strCountOfVoters = prompt('Enter the count of voters');
        const countOfVoters = parseInt(strCountOfVoters);

        if (isNaN(countOfVoters)) {
            alert('Give the count of voters as number');
        } else {
            askVotes(candidateArray, countOfVoters);
            announceWinner(candidateArray);
        }
    }
}

main();