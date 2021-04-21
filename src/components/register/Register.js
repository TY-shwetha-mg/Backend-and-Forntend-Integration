import React from 'react'

export default function Register() {
    return (
        <div>
           <form>
           <div className="form-group col-md-4 offset-md-4">
                    <label for="exampleInputEmail1">Full Name</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter ur full name" />
                </div>
                <div className="form-group col-md-4 offset-md-4">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group col-md-4 offset-md-4">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="myInput" placeholder="Password" />
                </div>
               
                <button type="submit" className="btn btn-primary ">LogIn</button>
            
      
            </form>
        </div>
    )
}









































// import React from 'react';
//  import { Formik } from 'formik';
 
//  const Register = () => (
//    <div>
//      <h1>Anywhere in your app!</h1>
//      <Formik
//        initialValues={{ email: '', password: '' }}
//        validate={values => {
//          const errors = {};
//          if (!values.email) {
//            errors.email = 'Required';
//          } else if (
//            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//          ) {
//            errors.email = 'Invalid email address';
//          }
//          return errors;
//        }}
//        onSubmit={(values, { setSubmitting }) => {
//          setTimeout(() => {
//            alert(JSON.stringify(values, null, 2));
//            setSubmitting(false);
//          }, 400);
//        }}
//      >
//        {({
//          values,
//          errors,
//          touched,
//          handleChange,
//          handleBlur,
//          handleSubmit,
//          isSubmitting,
//          /* and other goodies */
//        }) => (
//          <form onSubmit={handleSubmit}>
//            <input
//              type="email"
//              name="email"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.email}
//            />
//            {errors.email && touched.email && errors.email}
//            <input
//              type="password"
//              name="password"
//              onChange={handleChange}
//              onBlur={handleBlur}
//              value={values.password}
//            />
//            {errors.password && touched.password && errors.password}
//            <button type="submit" disabled={isSubmitting}>
//              Submit
//            </button>
//          </form>
//        )}
//      </Formik>
//    </div>
//  );
 
//  export default Register;
