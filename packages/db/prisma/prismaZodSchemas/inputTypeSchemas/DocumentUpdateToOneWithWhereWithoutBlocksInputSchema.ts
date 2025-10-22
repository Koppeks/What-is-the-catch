import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutBlocksInputSchema } from './DocumentUpdateWithoutBlocksInputSchema';
import { DocumentUncheckedUpdateWithoutBlocksInputSchema } from './DocumentUncheckedUpdateWithoutBlocksInputSchema';

export const DocumentUpdateToOneWithWhereWithoutBlocksInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutBlocksInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutBlocksInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutBlocksInputSchema) ]),
});

export default DocumentUpdateToOneWithWhereWithoutBlocksInputSchema;
