import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutSectionInputSchema } from './DocumentCreateWithoutSectionInputSchema';
import { DocumentUncheckedCreateWithoutSectionInputSchema } from './DocumentUncheckedCreateWithoutSectionInputSchema';
import { DocumentCreateOrConnectWithoutSectionInputSchema } from './DocumentCreateOrConnectWithoutSectionInputSchema';
import { DocumentUpsertWithoutSectionInputSchema } from './DocumentUpsertWithoutSectionInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutSectionInputSchema } from './DocumentUpdateToOneWithWhereWithoutSectionInputSchema';
import { DocumentUpdateWithoutSectionInputSchema } from './DocumentUpdateWithoutSectionInputSchema';
import { DocumentUncheckedUpdateWithoutSectionInputSchema } from './DocumentUncheckedUpdateWithoutSectionInputSchema';

export const DocumentUpdateOneRequiredWithoutSectionNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutSectionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutSectionInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutSectionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutSectionInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutSectionInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutSectionInputSchema), z.lazy(() => DocumentUpdateWithoutSectionInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutSectionInputSchema) ]).optional(),
});

export default DocumentUpdateOneRequiredWithoutSectionNestedInputSchema;
