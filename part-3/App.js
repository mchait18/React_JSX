function App() {
    return (
        <div>
            <Person name="John Doe" age={26} hobbies={['Hockey', 'Golf', 'Music']} />
            <Person name="Chana Chait" age={15} hobbies={['Dancing', 'Cheering']} />
            <Person name="Toby Chait" age={18} hobbies={['Singing', 'Learning', 'Growing']} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))