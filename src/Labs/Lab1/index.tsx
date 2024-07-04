export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                <p id="wd-p-1">
                This is a paragraph. We often separate a long set of sentences 
                with vertical spaces to make the text easier to read. Browsers ignore
                 vertical white spaces and render all the text as one single set of 
                 sentences. To force the browser to add vertical spacing, wrap the 
                 paragraphs you want to separate with the paragraph tag
                 </p>
                <p id="wd-p-2">
                This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
                </p>
                <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My favorite recipe:
                <ol id="wd-your-favorite-recipe">
                    <li>1 cup of hope</li>
                    <li>4 cups of dreams</li>
                    <li>2 pinches of imagination</li>
                </ol>
                <h5>Unordered List tag</h5>
                My favorite books (in no particular order)
                <ul>
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Nile favorite books (in no particular order)
                <ul>
                    <li>Cat in the hat</li>
                    <li>Devil in the white castle</li>
                    <li>Pokemon Game guide</li>
                </ul>
            </div>
        </div>
    );
}