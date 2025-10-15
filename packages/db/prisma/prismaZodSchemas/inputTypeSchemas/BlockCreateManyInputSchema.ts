import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BlockCreateManyInputSchema: z.ZodType<Prisma.BlockCreateManyInput> = z.strictObject({
  id: z.cuid().optional(),
  documentId: z.string(),
  parentId: z.string().optional().nullable(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default BlockCreateManyInputSchema;
