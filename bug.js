```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect usage of setInterval. The callback function doesn't include count as a dependency
    const intervalId = setInterval(() => {
      setCount(count + 1); 
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return <div>Count: {count}</div>;
}
```