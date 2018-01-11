import React from 'react';
import Article from "./components/Article";
import Quote from "./components/Quote";
import P from "./components/P";

const App = props => (
  <Article
    date="27 July, 2015"
    title="Too many tools and frameworks"
    subtitle="The definitive guide to the javascript tooling landscape in 2015."
    author="Adam Morse"
  >
    <P>
      Theodore Sturgeon was a science fiction author, critic, and the basis for Kurt
      Vonnegut's recurring character Kilgore Trout. He was prolific, authoring over 200 pieces
      himself and critiquing around 400 others.
    </P>

    <P>
      In 1958 he published a piece in Venture proclaiming what he called Sturgeon's Revelation
    </P>

    <Quote>
      I repeat Sturgeon's Revelation, which was wrung out of me after twenty years of wearying
      defense of science fiction against attacks of people who used the worst examples of the
      field for ammunition, and whose conclusion was that ninety percent of SF is crud. Using
      the same standards that categorize 90% of science fiction as trash, crud, or crap, it
      can be argued that 90% of film, literature, consumer goods, etc. is crap. In other
      words, the claim (or fact) that 90% of science fiction is crap is ultimately
      uninformative, because science fiction conforms to the same trends of quality as all
      other artforms.
    </Quote>

    <P>
      You don't have to bounce a tennis ball very far in San Francisco before it will hit two
      developers complaining about how many js tools/frameworks there are for development in
      2015 and how much unneccessary complexity they add. Doing a search on twitter for 'too
      many js tools' or 'yet another js framework' returns... a lot of people lamenting the
      current state of affairs.
    </P>

    <P>
      This is most likely, the wrong conversation for us as a community, to be having. The
      presence of bad tools - shouldn't discourage us from wanting more tools or frameworks.
      There are more books published in a single day than I will ever be able to read in my
      lifetime. But this does not make me sad. Or overwhelm me. Mostly I think about how
      excited I am to read the best books that are being published. And this is where we
      should push the conversation. How do we build better tools? What does that look like?
    </P>
  </Article>
);

export default App;
