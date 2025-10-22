# Typescript-adv-api

* Pick
    * Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type) or interface.

* Partial
    * Partial makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
    * Specifically useful when you want to do updates
    ```typescript
        interface User {
        id: string;
        name: string;
        age: string;
        email: string;
        password: string;
        };

        type UpdateProps = Pick<User, 'name' | 'age' | 'email'>

        type UpdatePropsOptional = Partial<UpdateProps>

        function updateUser(updatedProps: UpdatePropsOptional) {
            // hit the database tp update the user
        }
        updateUser({})
    ```

* Readonly
    * When you have a configuration object that should not be altered after initialization, making it Readonly ensures its
    properties cannot be changed.

* Record
    * Record let’s you give a cleaner type to objects
    ```typescript
        // You can type objects like follows - 

        interface User {
            id: string;
            name: string;
        }

        type Users = { [key: string]: User };

        const users: Users = {
            'abc123': { id: 'abc123', name: 'John Doe' },
            'xyz789': { id: 'xyz789', name: 'Jane Doe' },
        };
    ```
    ```typescript
        // or use Record

        interface User {
            id: string;
            name: string;
        }

        type Users = Record<string, User>;

        const users: Users = {
            'abc123': { id: 'abc123', name: 'John Doe' },
            'xyz789': { id: 'xyz789', name: 'Jane Doe' },
        };

        console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
    ```


* Map
    * maps gives you an even fancier way to deal with objects.
    * it is a javascript concept
    