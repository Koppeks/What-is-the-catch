import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BlockCreateNestedOneWithoutChildrenInputSchema } from './BlockCreateNestedOneWithoutChildrenInputSchema';
import { BlockCreateNestedManyWithoutParentInputSchema } from './BlockCreateNestedManyWithoutParentInputSchema';

export const BlockCreateWithoutDocumentInputSchema: z.ZodType<Prisma.BlockCreateWithoutDocumentInput> = z.strictObject({
  id: z.cuid().optional(),
  ordinalPath: z.string(),
  title: z.string(),
  text: z.string(),
  order: z.number().int(),
  depth: z.number().int(),
  meta: z.union([ z.lazy(() => NullableJsonNullValueInputSchema), InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  parent: z.lazy(() => BlockCreateNestedOneWithoutChildrenInputSchema).optional(),
  children: z.lazy(() => BlockCreateNestedManyWithoutParentInputSchema).optional(),
});

export default BlockCreateWithoutDocumentInputSchema;
