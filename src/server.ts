import app from './app';

const POST = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log( `server funcionandoo, puerto: ${PORT}`);
})