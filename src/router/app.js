import cors from 'cors';
import pkg from 'package-reader';
import { Router } from 'express';
import swaggerRouter from '#src/router/swagger';

const router = Router();

router.use('/swagger', swaggerRouter);

router
  .route('/')
  .options(cors({ methods: ['OPTIONS', 'GET'] }))
  .get(cors(), (req, res) => {
    res
      .status(200)
      .json({
        name: pkg.name,
        description: pkg.description,
        author: pkg.author,
        license: pkg.license,
      });
  });

export default router;
