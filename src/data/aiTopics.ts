
export interface TopicContent {
  title: string;
  description: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  color: string;
  subtopics?: Topic[];
  content?: TopicContent[];
}

export const aiTopics: Record<string, Topic> = {
  ai: {
    id: 'ai',
    title: 'Artificial Intelligence',
    description: 'The simulation of human intelligence in machines that are programmed to think and learn like humans.',
    color: 'indigo',
    subtopics: [
      {
        id: 'symbolic-ai',
        title: 'Symbolic AI',
        description: 'AI based on high-level symbolic representations of problems, logic and search.',
        color: 'purple'
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description: 'Systems that can learn and improve from experience without being explicitly programmed.',
        color: 'blue'
      },
      {
        id: 'neural-networks',
        title: 'Neural Networks',
        description: 'Computing systems inspired by biological neural networks that constitute animal brains.',
        color: 'pink'
      }
    ]
  },
  
  'symbolic-ai': {
    id: 'symbolic-ai',
    title: 'Symbolic AI',
    description: 'Classical AI approach using symbolic representations and logical reasoning.',
    color: 'purple',
    content: [
      {
        title: 'Expert Systems',
        description: 'Computer systems that emulate the decision-making ability of a human expert.'
      },
      {
        title: 'Logic Programming',
        description: 'Programming paradigm based on formal logic, like Prolog.'
      },
      {
        title: 'Knowledge Representation',
        description: 'Methods for encoding knowledge in a form that a computer system can utilize.'
      },
      {
        title: 'Automated Reasoning',
        description: 'Computer programs that reason completely or nearly completely automatically.'
      }
    ]
  },

  'machine-learning': {
    id: 'machine-learning',
    title: 'Machine Learning',
    description: 'A subset of AI that focuses on algorithms that can learn from and make predictions on data.',
    color: 'blue',
    subtopics: [
      {
        id: 'supervised-learning',
        title: 'Supervised Learning',
        description: 'Learning with labeled training data to make predictions on new data.',
        color: 'green'
      },
      {
        id: 'unsupervised-learning',
        title: 'Unsupervised Learning',
        description: 'Finding hidden patterns in data without labeled examples.',
        color: 'orange'
      },
      {
        id: 'reinforcement-learning',
        title: 'Reinforcement Learning',
        description: 'Learning through interaction with an environment via rewards and penalties.',
        color: 'purple'
      }
    ]
  },

  'supervised-learning': {
    id: 'supervised-learning',
    title: 'Supervised Learning',
    description: 'Machine learning where algorithms learn from labeled training data.',
    color: 'green',
    subtopics: [
      {
        id: 'regression',
        title: 'Regression',
        description: 'Predicting continuous numerical values.',
        color: 'blue'
      },
      {
        id: 'classification',
        title: 'Classification',
        description: 'Predicting discrete categories or classes.',
        color: 'indigo'
      }
    ]
  },

  'unsupervised-learning': {
    id: 'unsupervised-learning',
    title: 'Unsupervised Learning',
    description: 'Machine learning that finds patterns in data without labeled examples.',
    color: 'orange',
    subtopics: [
      {
        id: 'clustering',
        title: 'Clustering',
        description: 'Grouping similar data points together.',
        color: 'purple'
      },
      {
        id: 'feature-extraction',
        title: 'Feature Extraction',
        description: 'Reducing dimensionality while preserving important information.',
        color: 'pink'
      }
    ]
  },

  'reinforcement-learning': {
    id: 'reinforcement-learning',
    title: 'Reinforcement Learning',
    description: 'Learning optimal actions through trial and error interactions with an environment.',
    color: 'purple',
    content: [
      {
        title: 'Q-Learning',
        description: 'Model-free reinforcement learning algorithm to find optimal action-selection policy.'
      },
      {
        title: 'Policy Gradient Methods',
        description: 'Methods that optimize the policy directly using gradient ascent.'
      },
      {
        title: 'Actor-Critic',
        description: 'Combines value function approximation with policy gradient methods.'
      },
      {
        title: 'Deep Q-Networks (DQN)',
        description: 'Deep learning approach to Q-learning using neural networks.'
      }
    ]
  },

  'regression': {
    id: 'regression',
    title: 'Regression',
    description: 'Supervised learning technique for predicting continuous numerical outcomes.',
    color: 'blue',
    content: [
      {
        title: 'Linear Regression',
        description: 'Models relationship between variables using a linear equation.'
      },
      {
        title: 'Polynomial Regression',
        description: 'Extension of linear regression using polynomial features.'
      },
      {
        title: 'Ridge/Lasso Regression',
        description: 'Regularized linear regression to prevent overfitting.'
      },
      {
        title: 'Support Vector Regression',
        description: 'Uses support vector machines for regression tasks.'
      }
    ]
  },

  'classification': {
    id: 'classification',
    title: 'Classification',
    description: 'Supervised learning technique for predicting discrete categories.',
    color: 'indigo',
    content: [
      {
        title: 'Logistic Regression',
        description: 'Statistical method for binary and multiclass classification.'
      },
      {
        title: 'Decision Trees',
        description: 'Tree-like model for making decisions based on feature values.'
      },
      {
        title: 'Random Forest',
        description: 'Ensemble method using multiple decision trees.'
      },
      {
        title: 'Support Vector Machines',
        description: 'Finds optimal hyperplane to separate different classes.'
      }
    ]
  },

  'clustering': {
    id: 'clustering',
    title: 'Clustering',
    description: 'Unsupervised learning technique for grouping similar data points.',
    color: 'purple',
    content: [
      {
        title: 'K-Means',
        description: 'Partitions data into k clusters based on feature similarity.'
      },
      {
        title: 'Hierarchical Clustering',
        description: 'Creates tree of clusters by iteratively merging or splitting.'
      },
      {
        title: 'DBSCAN',
        description: 'Density-based clustering that can find clusters of arbitrary shape.'
      },
      {
        title: 'Gaussian Mixture Models',
        description: 'Probabilistic model assuming data comes from mixture of Gaussians.'
      }
    ]
  },

  'feature-extraction': {
    id: 'feature-extraction',
    title: 'Feature Extraction',
    description: 'Techniques for reducing data dimensionality while preserving important information.',
    color: 'pink',
    content: [
      {
        title: 'Principal Component Analysis (PCA)',
        description: 'Linear dimensionality reduction using singular value decomposition.'
      },
      {
        title: 'Independent Component Analysis (ICA)',
        description: 'Separates multivariate signal into independent non-Gaussian signals.'
      },
      {
        title: 't-SNE',
        description: 'Non-linear technique for visualizing high-dimensional data.'
      },
      {
        title: 'UMAP',
        description: 'Uniform manifold approximation for dimension reduction and visualization.'
      }
    ]
  },

  'neural-networks': {
    id: 'neural-networks',
    title: 'Neural Networks',
    description: 'Computing systems inspired by biological neural networks.',
    color: 'pink',
    subtopics: [
      {
        id: 'multi-layer-perceptron',
        title: 'Multi-layer Perceptron',
        description: 'Feedforward neural network with multiple layers of nodes.',
        color: 'blue'
      },
      {
        id: 'convolutional-neural-network',
        title: 'Convolutional Neural Network',
        description: 'Deep learning architecture particularly effective for image processing.',
        color: 'green'
      },
      {
        id: 'generative-ai',
        title: 'Generative AI',
        description: 'AI systems that can create new content, including text, images, and code.',
        color: 'purple'
      }
    ]
  },

  'multi-layer-perceptron': {
    id: 'multi-layer-perceptron',
    title: 'Multi-layer Perceptron',
    description: 'Feedforward artificial neural network with multiple layers.',
    color: 'blue',
    content: [
      {
        title: 'Input Layer',
        description: 'Receives input features and passes them to hidden layers.'
      },
      {
        title: 'Hidden Layers',
        description: 'Intermediate layers that process and transform the input data.'
      },
      {
        title: 'Output Layer',
        description: 'Produces final predictions or classifications.'
      },
      {
        title: 'Backpropagation',
        description: 'Algorithm for training the network by adjusting weights based on errors.'
      }
    ]
  },

  'convolutional-neural-network': {
    id: 'convolutional-neural-network',
    title: 'Convolutional Neural Network',
    description: 'Deep learning architecture using convolution operations, ideal for image processing.',
    color: 'green',
    content: [
      {
        title: 'Convolutional Layers',
        description: 'Apply filters to detect features like edges and patterns in images.'
      },
      {
        title: 'Pooling Layers',
        description: 'Reduce spatial dimensions while retaining important information.'
      },
      {
        title: 'Fully Connected Layers',
        description: 'Traditional neural network layers for final classification or regression.'
      },
      {
        title: 'Feature Maps',
        description: 'Output of convolutional layers showing detected features.'
      }
    ]
  },

  'generative-ai': {
    id: 'generative-ai',
    title: 'Generative AI',
    description: 'AI systems capable of creating new content across various modalities.',
    color: 'purple',
    content: [
      {
        title: 'Large Language Models (LLMs)',
        description: 'Neural networks trained on vast text corpora to generate human-like text.'
      },
      {
        title: 'Generative Adversarial Networks (GANs)',
        description: 'Two neural networks competing to generate realistic synthetic data.'
      },
      {
        title: 'Variational Autoencoders (VAEs)',
        description: 'Neural networks that learn to encode and decode data distributions.'
      },
      {
        title: 'Diffusion Models',
        description: 'Generate data by learning to reverse a noise corruption process.'
      }
    ]
  }
};
