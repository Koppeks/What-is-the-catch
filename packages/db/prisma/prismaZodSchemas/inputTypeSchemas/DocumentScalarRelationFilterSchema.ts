import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentScalarRelationFilterSchema: z.ZodType<Prisma.DocumentScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => DocumentWhereInputSchema).optional(),
  isNot: z.lazy(() => DocumentWhereInputSchema).optional(),
});

export default DocumentScalarRelationFilterSchema;
