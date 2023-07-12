//kifch bch nktbou fe wost fichier continue 
const fs = require('fs');

const htmlCode = `<div>
  <h2>Login</h2>
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text"  name="username" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password"  name="password" required>
    </div>
    <button type="submit">Login</button>
  </form>
</div>`;
const tsCode=`import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
}`;
const cssCode=`div {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label, input, button {
  display: block;
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
}
`;
const appCode=`<div>
<app-login></app-login>
</div>
`;

fs.writeFile('C:/hello/project1/src/app/login/login.component.html', htmlCode, (err) => {
  if (err) {
    console.error('Error writing HTML file:', err);
  } else {
    console.log('HTML file has been created successfully.');
  }
});
fs.writeFile('C:/hello/project1/src/app/login/login.component.ts', tsCode, (err) => {
  if (err) {
    console.error('Error writing Ts file:', err);
  } else {
    console.log('Ts file has been created successfully.');
  }
});
fs.writeFile('C:/hello/project1/src/app/login/login.component.css', cssCode, (err) => {
  if (err) {
    console.error('Error writing Css file:', err);
  } else {
    console.log('Css file has been created successfully.');
  }
});
fs.writeFile('C:/hello/project1/src/app/app.component.html', appCode, (err) => {
  if (err) {
    console.error('Error writing App file:', err);
  } else {
    console.log('App file has been created successfully.');
  }
});