import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BlockUncheckedUpdateManyWithoutSectionNestedInputSchema } from './BlockUncheckedUpdateManyWithoutSectionNestedInputSchema';

export const SectionUncheckedUpdateWithoutChildrenInputSchema: z.ZodType<Prisma.SectionUncheckedUpdateWithoutChildrenInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  documentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  headingBlockId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Block: z.lazy(() => BlockUncheckedUpdateManyWithoutSectionNestedInputSchema).optional(),
});

export default SectionUncheckedUpdateWithoutChildrenInputSchema;
