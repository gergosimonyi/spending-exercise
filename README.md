# TL;DR: If you just want to run the thing

### Database

This solution uses PostgreSQL. Start it however you like. Something like this might be easiest:

```bash
docker run --rm --shm-size 1g --name pg-docker -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 -v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres
```

### Back-end

The back-end is a Rails API. In the `api` folder:

0. (Optional:) Adjust `config/database.yml` to your PostgreSQL instance if you use a non-default environment.
1. Install the Ruby version specified in `.ruby-version`. I recommend [rbenv](https://github.com/rbenv/rbenv) for this.
2. Install dependencies: `bundle`.
3. Initialize database(s): `bin/rails db:setup`.
4. Run tests: `bin/rails test`.
5. Run back-end: `bin/rails server -p 5000`.

### Front-end

The front-end is a React app. In the `web` folder:

1. Install the Node version specified in `.node-version`. I recommend [nodenv](https://github.com/nodenv/nodenv) for this.
2. Install dependencies: `npm i`.
3. Run tests: `npm test`.
4. Run front-end: `npm start`.

### End-to-end tests

The end-to-end tests are written in Cypress. Run both the back-end and the front-end, then in the `e2e` folder:

1. Install dependencies: `npm i`.
2. Run the Cypress app: `npm start`.
3. Run the `spec.cy.js` test suite.

# Commentary

This is a solution to the Polygence Coding Challenge, a simple task which processes a single entity, presented by an SPA. The original text of the challenge is preserved in [TASK.md](./TASK.md).

I aim to adhere to [Kent Beck's adage on how to change code](https://twitter.com/KentBeck/status/250733358307500032):

> for each desired change, make the change easy (warning: this may be hard), then make the easy change

For that reason, the commit history is clearly separable into two sections:

1. I refactor the given code to better fit my needs
2. I add the functionality to meet the requirements of the challenge

### Testing strategy

I aim to adhere to [Kent C. Dodds's adage on testing confidence](https://twitter.com/kentcdodds/status/977018512689455106) (quotes from Kents are all the rage):

> The more your tests resemble the way your software is used, the more confidence they can give you.

End-to-end tests cover the acceptance criteria outlaid in [TASK.md](./TASK.md).

Integration tests cover the services' individual behaviors.

I deemed it unnecessary to write any unit tests.

### Design choices I made

- currencies are represented in cents
- currencies are displayed according to browser language
- amounts are recorded using arbitrary precision, but presented using double-precision
- negative amounts are possible (i.e. income)

### If I had infinite time, I may have added

- formatters, linters, pre-commit hooks
- docker and docker compose to make the above TL;DR just one line
- nginx as a reverse proxy for TLS and to treat front-end and back-end as same origin
- updating and deleting spendings to complete the CRUD (probably using soft deletes)
- API versioning
- database normalization
- live and historical exchange rates for value-based sorting
- proper treatment of currencies in the presentation layer (using `BigInt`)
- an API specification (e.g. JSON:API)
- swagger for API documentation
- pagination in the API
- a `Spending` entity on the front-end
- TypeScript
- loading indicator in `Form`
- cancelling the async call in `Form`, if unmounted
- pushing filtering and ordering information to browser history
- database indices (after profiling)
- websocket and/or service worker based updates to the spending list
