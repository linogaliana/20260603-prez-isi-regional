# ISI WSC European conference

**From "it worked on my notebook" to production-ready machine learning: bridging the gap with MLOps**

## Abstract

Many organizations face the same turning point: once a model has been trained and seems ready, how can it be reliably deployed and remain useful over time?

This talk focuses on the operational foundations required to move from experimentation to production. We first show how structuring a project around distinct lifecycles (data, code, and software environment) is a key step toward building robust and reproducible AI pipelines.

We then highlight the role of containerization in bridging the gap between development and production environments. Combined with Kubernetes-based infrastructures, these approaches enable the industrialization of both training and deployment, ensuring that models can be selected, versioned, and served in a controlled and scalable way.

Building on this, we illustrate how machine learning platforms such as MLflow or Langfuse support experiment tracking and performance evaluation during the experimentation phase, as well as observability in production. These tools enable continuous monitoring and the implementation of feedback loops, allowing practitioners to detect drift and continuously improve models over time.

Finally, we distinguish between supervised learning approaches and LLM-based systems, which entail different operational constraints. We discuss the resulting implications for annotation, evaluation, robustness, and lifecycle management.
