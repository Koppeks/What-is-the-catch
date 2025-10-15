import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DocumentUpdateOneRequiredWithoutSectionNestedInputSchema } from './DocumentUpdateOneRequiredWithoutSectionNestedInputSchema';
import { SectionUpdateOneWithoutChildrenNestedInputSchema } from './SectionUpdateOneWithoutChildrenNestedInputSchema';
import { SectionUpdateManyWithoutParentNestedInputSchema } from './SectionUpdateManyWithoutParentNestedInputSchema';
import { BlockUpdateManyWithoutSectionNestedInputSchema } from './BlockUpdateManyWithoutSectionNestedInputSchema';

export const SectionUpdateWithoutHeadingBlockInputSchema: z.ZodType<Prisma.SectionUpdateWithoutHeadingBlockInput> = z.strictObject({
  id: z.union([ z.cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  document: z.lazy(() => DocumentUpdateOneRequiredWithoutSectionNestedInputSchema).optional(),
  parent: z.lazy(() => SectionUpdateOneWithoutChildrenNestedInputSchema).optional(),
  children: z.lazy(() => SectionUpdateManyWithoutParentNestedInputSchema).optional(),
  Block: z.lazy(() => BlockUpdateManyWithoutSectionNestedInputSchema).optional(),
});

export default SectionUpdateWithoutHeadingBlockInputSchema;
