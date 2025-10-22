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