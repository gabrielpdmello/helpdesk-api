function errorMiddleware(err, req, res, next) {
  console.error("[ERRO]:", err.stack);
  const status = err.status || 500;

  res.status(status).json({
    error: err.message || "Erro interno no servidor",
    status: status,
  });
}
module.exports = errorMiddleware;
