const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPFC' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
  ];

const existingId = (req, res, next) => {
    const id = Number(req.params.id);
    const team = teams.some((t) => t.id === id);
    if (!team) return res.status(400).json({ message: 'Time não encontrado' });
    next();
  };

  module.exports = existingId;