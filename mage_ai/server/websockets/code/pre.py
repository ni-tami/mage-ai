import json
import os

from mage_ai.settings.repo import get_repo_path, get_variables_dir


def build_path(repo_path: str, partition: str, filename: str = None) -> str:
    path = os.path.join(
        get_variables_dir(repo_path=repo_path),
        '.code_state_manager',
        partition,
    )
    if filename:
        path = os.path.join(path, filename)
    return path


# 1. Clear variables
# 2. Store current variable names to file
file_path = build_path(get_repo_path(root_project=True), 'msg_id', 'variables.json')
os.makedirs(os.path.dirname(file_path), exist_ok=True)

keys = dir()
with open(file_path, 'w') as f:
    f.write(json.dumps(keys))
