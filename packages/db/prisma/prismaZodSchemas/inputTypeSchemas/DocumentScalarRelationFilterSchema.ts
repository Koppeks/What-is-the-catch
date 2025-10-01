import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';

export const DocumentScalarRelationFilterSchema: z.ZodType<Prisma.DocumentScalarRelationFilter> = z.object({
  is: z.lazy(() => DocumentWhereInputSchema).optional(),
  isNot: z.lazy(() => DocumentWhereInputSchema).optional()
}).strict() as z.ZodType<Prisma.DocumentScalarRelationFilter>;

export default DocumentScalarRelationFilterSchema;
