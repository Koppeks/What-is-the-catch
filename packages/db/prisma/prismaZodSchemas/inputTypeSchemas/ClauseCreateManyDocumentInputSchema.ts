import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const ClauseCreateManyDocumentInputSchema: z.ZodType<Prisma.ClauseCreateManyDocumentInput> = z.object({
  id: z.string().cuid().optional(),
  parentId: z.string().optional().nullable(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.ClauseCreateManyDocumentInput>;

export default ClauseCreateManyDocumentInputSchema;
