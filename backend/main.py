from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from collections import defaultdict

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/pipelines/parse")
def parse_pipeline(payload: dict):
    nodes = payload.get("nodes", [])
    edges = payload.get("edges", [])

    num_nodes = len(nodes)
    num_edges = len(edges)

    graph = defaultdict(list)
    indegree = defaultdict(int)

    for edge in edges:
        graph[edge["source"]].append(edge["target"])
        indegree[edge["target"]] += 1

    queue = [n["id"] for n in nodes if indegree[n["id"]] == 0]
    visited = 0

    while queue:
        node = queue.pop(0)
        visited += 1
        for nei in graph[node]:
            indegree[nei] -= 1
            if indegree[nei] == 0:
                queue.append(nei)

    is_dag = visited == num_nodes

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }
