import { BaseRequestOptions, Http, RequestMethod, RequestOptions, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function mockBackEndFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {
    // array in local storage for registered users
    const users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    // fake token
    const token = 'fake-jwt-token';

    // configure fake backend
    backend.connections.subscribe((connection: MockConnection) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            // authenticate
            if (connection.request.url.endsWith('/api/authenticate') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                const params = JSON.parse(connection.request.getBody());

                // find if any user matches login credentials
                const filteredUsers = users.filter(user => {
                    return user.email === params.email && user.password === params.password;
                });

                // default account
                if (params.email === 'admin@digitrack.com' && params.password === 'admin') {
                    filteredUsers[0] = {
                        fullName: 'Admin',
                        email: 'admin@digitrack.com',
                        password: 'admin',
                    };
                }

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    connection.mockRespond(new Response(new ResponseOptions({
                        status: 200,
                        body: {
                            id: user.id,
                            fullName: user.fullName,
                            email: user.email,
                            token: token
                        }
                    })));
                } else {
                    // else return 400 bad request
                    connection.mockError(new Error('Email or password is incorrect'));
                }

                return;
            }

            // get users
            if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: users })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            /**
             * get user by id
             **/
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Get) {
                /**
                 *check for fake auth token in header and return user if valid,
                   this security is implemented server side in a real application
                  *
                 **/
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    const urlParts = connection.request.url.split('/');
                    // tslint:disable-next-line:radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    const matchedUsers = users.filter(res => {
                        debugger
                        return res.id === id;
                    });
                    const user = matchedUsers.length ? matchedUsers[0] : null;

                    // respond 200 OK with user
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: user })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            // create user
            if (connection.request.url.endsWith('/api/users') && connection.request.method === RequestMethod.Post) {
                // get new user object from post body
                const newUser = JSON.parse(connection.request.getBody());

                // validation
                const duplicateUser = users.filter(user => {
                    return user.email === newUser.email;
                }).length;
                if (duplicateUser) {
                    return connection.mockError(new Error('Email "' + newUser.email + '" is already registered'));
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));

                return;
            }

            // delete user
            if (connection.request.url.match(/\/api\/users\/\d+$/) && connection.request.method === RequestMethod.Delete) {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    // find user by id in users array
                    const urlParts = connection.request.url.split('/');
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            // token verify
            if (connection.request.url.endsWith('/api/verify') && connection.request.method === RequestMethod.Get) {
                // check for fake auth token in header and return users if valid, this security
                // is implemented server side in a real application
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200, body: { status: 'ok' } })));
                } else {
                    // return 401 not authorised if token is null or invalid
                    connection.mockRespond(new Response(new ResponseOptions({ status: 401 })));
                }

                return;
            }

            // forgot password
            if (connection.request.url.endsWith('/api/forgot-password') && connection.request.method === RequestMethod.Post) {
                // get parameters from post request
                const params = JSON.parse(connection.request.getBody());

                // find if any user matches login credentials
                const filteredUsers = users.filter(user => {
                    return user.email === params.email;
                });

                if (filteredUsers.length) {
                    // in real world, if email is valid, send email change password link
                    const user = filteredUsers[0];
                    connection.mockRespond(new Response(new ResponseOptions({ status: 200 })));
                } else {
                    // else return 400 bad request
                    connection.mockError(new Error('User with this email does not exist'));
                }

                return;
            }

            // pass through any requests not handled above
            const realHttp = new Http(realBackend, options);
            const requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });

        }, 500);

    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: Http,
    deps: [MockBackend, BaseRequestOptions, XHRBackend],
    useFactory: mockBackEndFactory
};
