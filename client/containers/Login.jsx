import React, { useState } from 'react';
// import { Link, Navigate } from 'react-router-dom';
import { loginUrl } from '../utils/spotify';
import { Form, Input, Button, Checkbox } from 'antd';
import logo from '../assets/mytunes-logo-mui.png';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleClick = (e) => {
      e.preventDefault();
      // send username and password as a body in post request to server, for server to authenticate
      // if catch err, setError(err);
      console.log('at handleClick');
      // return <Navigate to='/home' />;
  }

  return (
    <>
    {/* <img src={logo} className="logo-img"></img> */}
    <div id="login">
      <Form
    // className="userAuth"
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      onChange={(e) => setUsername(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      onChange={(e) => setPassword(e.target.value)}
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox id="button">Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" onClick={handleClick}>
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  <div>
  <img
        src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
        alt='Spotify-Logo'
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
  </div>
  </>
  );
};

export default Login;
    // <>
    // <div className="authForm">
    //   <div id="logo"><img src={logo} className='logo-img'></img></div> {/*row 1*/}
    //   <div id="username"> {/*row 2*/}
    //     <div id="required">*</div>
    //     <div><label>Username: </label></div>
    //     <div><input value={username} onChange={(e) => setUsername(e.target.value)}></input></div>
    //   </div>
    //   <div id="password"> {/*row 3*/}
    //     <div id="required">*</div>
    //     <div><label>Password: </label></div>
    //     <div><input value={password} onChange={(e) => setPassword(e.target.value)}></input></div>
    //   </div>
    //   {/* { noInput && <div id="required">{error}</div>} */}
    //   <div id="auth"> {/*row 4*/}
    //     <div><button id="authButton" onClick={handleClick}>Login</button></div>
    //     <div style={{'alignSelf': 'center'}}><Link to='/signup' id="link">Sign up?</Link></div>
    //   </div>
    //   <div>
    //   <img
    //     src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
    //     alt='Spotify-Logo'
    //   />
    //   <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    //   </div>
    // </div>
    // </>