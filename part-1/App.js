function App() {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="John" />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);