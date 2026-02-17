Instructions



How to Run for Local Development

Run the following command to start the Vite dev server:

npm run dev

Note: Vite defaults to port 5173. Check your terminal output for the local URL.

Docker

Build the Docker image:

docker build -t petkennel .

Run the container:

docker run -p 3000:3000 petkennel

Access the application at: <http://localhost:3000>

To stop the container, press Ctrl+C or run docker ps to find the container ID, then docker stop <container-id>.
