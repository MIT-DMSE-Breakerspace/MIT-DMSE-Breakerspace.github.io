### Quick Imaging Settings {#quick-settings}

| Goal | Starting settings | Watch for |
| --- | --- | --- |
| General imaging | 10 kV, Image intensity, auto brightness/contrast, manual or auto focus | Good balance of resolution, speed, and sample tolerance. |
| Surface-sensitive imaging | 5 kV, Low or Image intensity | Useful for residues, stains, coatings, and beam-sensitive surfaces. |
| Non-conductive sample | Low vacuum, sputter coating, or conductive tape/paint | Charging appears as brightening, drift, distortion, or loss of detail. |
{% if include.scan_size_label_verified %}
| High-quality image capture | Start with default acquisition, then increase **Scan Size** (image resolution) or **Averaging** only if stable | Long acquisitions magnify drift, charging, vibration, and beam damage. |
{% else %}
| High-quality image capture | Start with default acquisition, then increase resolution/averaging only if stable | Long acquisitions magnify drift, charging, vibration, and beam damage. |
{% endif %}
