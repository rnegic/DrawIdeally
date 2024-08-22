import ideas from './ideas';

export const ExtractIdea = (category: String) => {
    return () => {
        const rnd = Math.floor(Math.random() * 10);
        const idea = ideas.category[rnd];

        console.log(idea);
        return idea;
    };
};