import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Infra Demo: UI Deployment</h1>
      <p>This is a static UI deployed via S3 and CloudFront.</p>
      <p>Infrastructure was provisioned using AWS CloudFormation and CI/CD with CircleCI.</p>
    </div>
  )
}

export default App;