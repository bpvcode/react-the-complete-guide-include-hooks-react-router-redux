import './Footer.css'

const Footer = () => {

    const quotes = [
        'An investment in knowledge pays the best interest.',
        "Bottoms in the investment world don't end with four-year lows; they end with 10- or 15-year lows.",
        "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
        "Given a 10% chance of a 100 times payoff, you should take that bet every time.",
        "I don't look to jump over seven-foot bars; I look around for one-foot bars that I can step over."
    ]
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    return (
        <div className="footer">
            <span>{randomQuote}</span>
        </div>
    )

}

export default Footer;