import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ClauseCreateNestedOneWithoutChildrenInputSchema } from './ClauseCreateNestedOneWithoutChildrenInputSchema';
import { ClauseCreateNestedManyWithoutParentInputSchema } from './ClauseCreateNestedManyWithoutParentInputSchema';

export const ClauseCreateWithoutDocumentInputSchema: z.ZodType<Prisma.ClauseCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parent: z.lazy(() => ClauseCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => ClauseCreateNestedManyWithoutParentInputSchema).optional(),
});

export default ClauseCreateWithoutDocumentInputSchema;
