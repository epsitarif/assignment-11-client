const Blogs = () => {
  return (
    <div>
      <h2>
        Question-1: What is an access token and refresh token? How do they work
        and where should we store them on the client-side?
      </h2>
      <h3 className="mt-5">
        Answer-1: Access tokens are used in token-based authentication to allow
        an application to access an API. And refresh token is a special token
        that is used to obtain additional access tokens. Access tokens are used
        in token-based authentication to allow an application to access an API.
        The application receives an access token after a user successfully
        authenticates and authorizes access, then passes the access token as a
        credential when it calls the target API. A refresh token is a special
        key that enables a client for an API or service to retrieve new access
        tokens without requiring the user to perform a complete login. Store it
        in a cookie in client side, it can be safer than local browser storage.
      </h3>

      <h2 className="mt-10">
        Question-2: Compare SQL and NoSQL databases?
      </h2>
      <h3 className="mt-5">
        Answer-2: While SQL is valued for ensuring data validity, NoSQL is good when it is more important that the availability of big data is fast. It is also a good choice when a company will need to scale because of changing requirements. NoSQL is easy-to-use, flexible and offers high performance.
      </h3>

      <h2 className="mt-10">
        Question-3: What is express js? What is Nest JS?
      </h2>
      <h3 className="mt-5">
        Answer-3: Express.js is a back end web application framework for building RESTful APIs with Node.js, which is released as free and open source software under the MIT license. <br /> Nest. js is a server-side Node. js framework that is great for building highly testable and maintainable backend applications.

      </h3>

      <h2 className="mt-10">
        Question-4: What is an access token and refresh token? How do they work
        and where should we store them on the client-side?
      </h2>
      <h3 className="mt-5">
        Answer-4: Access tokens are used in token-based authentication to allow
        an application to access an API. And refresh token is a special token
        that is used to obtain additional access tokens. Access tokens are used
        in token-based authentication to allow an application to access an API.
        The application receives an access token after a user successfully
        authenticates and authorizes access, then passes the access token as a
        credential when it calls the target API. A refresh token is a special
        key that enables a client for an API or service to retrieve new access
        tokens without requiring the user to perform a complete login. Store it
        in a cookie in client side, it can be safer than local browser storage.
      </h3>
    </div>
  );
};

export default Blogs;
