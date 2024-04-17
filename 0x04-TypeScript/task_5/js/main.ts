// Define the interfaces with a unique brand property
interface MajorCredits {
    readonly credits: number;
    readonly __brand: "MajorCredits";
}

interface MinorCredits {
    readonly credits: number;
    readonly __brand: "MinorCredits";
}

// Implement the interfaces
function MajorCredits(credits: number): MajorCredits {
    return { credits, __brand: "MajorCredits" };
}

function MinorCredits(credits: number): MinorCredits {
    return { credits, __brand: "MinorCredits" };
}

// Create the sum functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return MajorCredits(subject1.credits + subject2.credits);
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return MinorCredits(subject1.credits + subject2.credits);
}