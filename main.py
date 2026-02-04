from pathlib import Path
import polars as pl

def import_fig1():
    millesime=2024
    file_path = f"/home/onyxia/work/ip-effectifs/chiffres/{millesime}"
    version_N = "4_1"
    version_N1 = "16_1"


    dossier = Path(file_path)

    fichiers = [
        p for p in dossier.rglob("*")
        if p.is_file() and (version_N in p.name) and ("GT" in p.name)
    ]



    fig1_eff = pl.read_excel(
        fichiers[0],
        sheet_name="Figure 1",
        engine="calamine",
        read_options={
            "skip_rows": 4,
            "n_rows": 4,
            "column_names": ["versant", "2023_yca", "2023_hca","2024_yca","2024_hca", "evol_yca", "evol_hca"]
        },
    )

    return fig1_eff


