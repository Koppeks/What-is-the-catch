import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentWhereInputSchema } from './DocumentWhereInputSchema';
import { DocumentUpdateWithoutSectionInputSchema } from './DocumentUpdateWithoutSectionInputSchema';
import { DocumentUncheckedUpdateWithoutSectionInputSchema } from './DocumentUncheckedUpdateWithoutSectionInputSchema';

export const DocumentUpdateToOneWithWhereWithoutSectionInputSchema: z.ZodType<Prisma.DocumentUpdateToOneWithWhereWithoutSectionInput> = z.strictObject({
  where: z.lazy(() => DocumentWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => DocumentUpdateWithoutSectionInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutSectionInputSchema) ]),
});

export default DocumentUpdateToOneWithWhereWithoutSectionInputSchema;
