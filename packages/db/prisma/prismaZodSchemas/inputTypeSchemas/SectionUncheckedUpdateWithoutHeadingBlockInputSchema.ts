import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { SectionUncheckedUpdateManyWithoutParentNestedInputSchema } from './SectionUncheckedUpdateManyWithoutParentNestedInputSchema';
import { BlockUncheckedUpdateManyWithoutSectionNestedInputSchema } from './BlockUncheckedUpdateManyWithoutSectionNestedInputSchema';

export const SectionUncheckedUpdateWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionUncheckedUpdateWithoutHeadingBlockInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  documentId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  parentId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  children: z.lazy(() => SectionUncheckedUpdateManyWithoutParentNestedInputSchema).optional(),
  Block: z.lazy(() => BlockUncheckedUpdateManyWithoutSectionNestedInputSchema).optional(),
});

export default SectionUncheckedUpdateWithoutHeadingBlockInputSchema;
