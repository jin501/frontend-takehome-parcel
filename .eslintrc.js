module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "airbnb",
        // "eslint:recommended",
        // "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react-hooks"
    ],
    "rules": {
        "semi": "off",
        "react/jsx-fragments": "off"
    }
};
