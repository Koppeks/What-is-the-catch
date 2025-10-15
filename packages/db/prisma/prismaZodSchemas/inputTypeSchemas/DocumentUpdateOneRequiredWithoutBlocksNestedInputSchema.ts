import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DocumentCreateWithoutBlocksInputSchema } from './DocumentCreateWithoutBlocksInputSchema';
import { DocumentUncheckedCreateWithoutBlocksInputSchema } from './DocumentUncheckedCreateWithoutBlocksInputSchema';
import { DocumentCreateOrConnectWithoutBlocksInputSchema } from './DocumentCreateOrConnectWithoutBlocksInputSchema';
import { DocumentUpsertWithoutBlocksInputSchema } from './DocumentUpsertWithoutBlocksInputSchema';
import { DocumentWhereUniqueInputSchema } from './DocumentWhereUniqueInputSchema';
import { DocumentUpdateToOneWithWhereWithoutBlocksInputSchema } from './DocumentUpdateToOneWithWhereWithoutBlocksInputSchema';
import { DocumentUpdateWithoutBlocksInputSchema } from './DocumentUpdateWithoutBlocksInputSchema';
import { DocumentUncheckedUpdateWithoutBlocksInputSchema } from './DocumentUncheckedUpdateWithoutBlocksInputSchema';

export const DocumentUpdateOneRequiredWithoutBlocksNestedInputSchema: z.ZodType<Prisma.DocumentUpdateOneRequiredWithoutBlocksNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => DocumentCreateWithoutBlocksInputSchema), z.lazy(() => DocumentUncheckedCreateWithoutBlocksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => DocumentCreateOrConnectWithoutBlocksInputSchema).optional(),
  upsert: z.lazy(() => DocumentUpsertWithoutBlocksInputSchema).optional(),
  connect: z.lazy(() => DocumentWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => DocumentUpdateToOneWithWhereWithoutBlocksInputSchema), z.lazy(() => DocumentUpdateWithoutBlocksInputSchema), z.lazy(() => DocumentUncheckedUpdateWithoutBlocksInputSchema) ]).optional(),
});

export default DocumentUpdateOneRequiredWithoutBlocksNestedInputSchema;
